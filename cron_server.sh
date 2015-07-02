#! /bin/sh

ps auxw | grep [g]runt


if [ $? != 0 ]
then
	grunt serve --force
	exit 0
else
	exit 1
fi