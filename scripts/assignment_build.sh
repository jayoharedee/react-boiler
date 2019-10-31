#!/bin/bash
# assignment_scaffolder.sh
confirm() {
  read -r -p "$1? [y/N] " response
  case "$response" in
    [yY][eE][sS]|[yY])
      true
      ;;
    *)
      false
      ;;
  esac
}

# clone project directory
git clone git@github.com:jayoharedee/course.git
cd course

# create development branch, checkout
git branch development
git checkout development

#other options
confirm "Need any other options" || exit 0
# project dependency install area
confirm "Would you like to install project dependencies" && npm install

# build the application
confirm "Would you like to build the application" && npm run build

# start the application
confirm "Would you like to start the application" && npm run start

# done
echo && echo "Base assignment created."
exit 0
