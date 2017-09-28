#! /usr/bin/env bash
#
# serve.sh dev|test|prod
#
# serve npl web server
#

set -x

usage() {
  echo "usage error"
  echo
  echo "usage: $0 dev|test|prod"
  exit 1
}

if [[ $# -eq 0 ]] || [[ $# -gt 1 ]]; then
  usage
fi

if [[ $1 != "test" ]] && [[ $1 != "dev" ]] && [[ $1 != "prod" ]]; then
  usage
fi

ENV_TYPE=$1
DATE=$(date +"%Y-%m-%d-%H-%M")

case $ENV_TYPE in
  dev)
    ROOT_DIR=www
    PORT=8900
    ;;
  test)
    ROOT_DIR=test
    PORT=8099
    ;;
  prod)
    ROOT_DIR=rls
    PORT=8088
    ;;
esac

LOG_DIR=log
mkdir -p $LOG_DIR
logfile="$LOG_DIR/${ENV_TYPE}-${DATE}.log"
runtime_error_logfile="$LOG_DIR/prod-runtime-error.log"

ulimit -c unlimited
npl -D bootstrapper="script/apps/WebServer/WebServer.lua"  root="$ROOT_DIR/" port="$PORT" logfile="$logfile"
exit_code=$?

cat $logfile | grep -i '<runtime' >> $runtime_error_logfile


echo -e "\n"  >> $logfile
echo "log from serve.sh: =========================================="  >> $logfile
echo "log from serve.sh: npl process exit with code: $exit_code"      >> $logfile
echo "log from serve.sh: =========================================="  >> $logfile


echo -e "\n"  >> $logfile
echo "current dir file status:"  >> $logfile
echo "$(ls -alh)" >> $logfile


# gather core file
# refs: https://abcdabcd987.com/core-dump-file-in-docker/
#
# default core_pattern is |/usr/share/apport/apport %p %s %c %P
# container have no privilege to geenrate core dump
# container share /proc with host machine, we change core_pattern to local place
# echo 'core.%s.%t' > /proc/sys/kernel/core_pattern
# %s is signal, %t is timestamp

EXIT_DATE=$(date +"%Y-%m-%d-%H-%M")
find . -maxdepth 1 -type f -iname *core* -exec mv {} $LOG_DIR/{}.$EXIT_DATE \;

exit $exit_code
