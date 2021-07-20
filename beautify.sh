jsfiles=./app/*.js

a=($(echo "$jsfiles" | tr ' ' '\n')) #turning them into an array, feel free to improve hahahaha

for i in "${a[@]}"
do
  	js-beautify -r $i
done