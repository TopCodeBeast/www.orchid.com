#!/bin/bash -x
# deploy.sh: -*- Shell-script -*-  Deploy this website to AWS S3
#
#  Copyright (c) 2019 Brian Fox
#  Copyright (c) 2019-2020 Nathan Handler
#  Authors: Brian Fox <bfox@brianjfox.com>, Nathan Handler <nhandler@orchid.com>
#  Birthdate: Mon Mar  4 14:03:59 2019.


function usage () {
	local exit_status="$1"
	echo "Usage:  deploy [staging [{ja,ko,zh,id,ru,en}] | production [{ja,ko,zh,id,ru,en}]"
	echo "Deploys the built website to the specified destination."
	exit $exit_status
}

function main() {

	built_files=dist/static
	# Build the static site...
	cd ${built_files};
	 for file in $(echo *.html); do
		mkdir -p $(basename ${file} .html)
		cp ${file} $(basename ${file} .html)/index.html
	done;
	ln -s assets/whitepaper/whitepaper.pdf ./whitepaper.pdf
	ln -s dist/static ./public
}

main "$@"
