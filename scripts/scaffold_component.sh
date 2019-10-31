#!/bin/bash

if [ $# -lt 1 ] ; then
  echo "Please make sure your provide a component name." && exit 1
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
    sed -i -e "s/Example/$1/g" .components/$1/index.js .components/$1/Example.js
    mv ./components/$1/Example.js ./components/$1/$1.js
    ;;
  src)np
    cp -rf ./js/components/example ./js/components/$1
    sed -i -e "s/Example/$1/g" ./js/components/$1/index.js ./js/components/$1/Example.js
    mv ./js/components/$1/Example.js ./js/components/$1/$1.js
    ;;
  react-boiler)
    cp -rf ./src/js/components/example ./src/js/components/$1
    sed -i -e "s/Example/$1/g" ./src/js/components/$1/index.js ./src/js/components/$1/Example.js
    mv ./src/js/components/$1/Example.js ./src/js/components/$1/$1.js
    ;;
  *)
    echo "Something went awry. Make sure your in root or a child of src."
    exit 1
esac