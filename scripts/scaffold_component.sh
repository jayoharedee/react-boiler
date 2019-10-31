#!/bin/bash

if [ $# -lt 1 ] ; then
  echo "Please make sure your provide a component name."
fi

DIR=$(basename "`pwd`" )

# ensure user is in root project or scripts folder before continuing
case $DIR in
  components)
    # envoke component creater function here
    cp -rf ./example ./$1
    ;;
  js)
    cp -rf ./components/example ./components/$1
    ;;
  src)
    cp -rf ./js/components/example ./js/components/$1
    ;;
  react-boiler)
    cp -rf ./src/js/components/example ./src/js/components/$1
    ;;
  *)
    echo "Something went awry. Make sure your in root or a child of src."
    exit 1
esac