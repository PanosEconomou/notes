#!/bin/bash

external_folders_path="../.."
public_dir="./public/NOTES"

for folder in "$external_folders_path"/*/;
do 
    folder_name=${folder%/} 
    base_name=$(basename "$folder_name")

    if [[ "$base_name" != "host" ]]; then
        cp -r "$folder" "$public_dir/$base_name"
    fi
done

# List all files and directories recursively
find "$public_dir" -type f -o -type d | sed "s|$public_dir/||" > "$public_dir/directory_listing.txt"
