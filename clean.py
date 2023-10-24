#!/usr/bin/env python3

import sys
import os

if len(sys.argv) != 2:
    print("Usage: python add_new_line.py <directory>")
    sys.exit(1)


directory = sys.argv[1]
file_extension = '.md'

file_list = [filename for filename in os.listdir(directory) if filename.endswith(file_extension)]

for input_file in file_list:
    file = open(input_file,'r')
    lines = file.readlines()
    file.close()

    trigger_count   = [i for i in range(len(lines)) if lines[i] == '$$\n']
    for i,j in enumerate(trigger_count): 
        lines[j] = lines[j] + "\n" if i%2!=0 and lines[j+1]!='\n' else "\n" + lines[j] if i%2==0 and lines[j-1] != "\n" else lines[j]

    file = open(input_file,'w')
    # file.truncate(0)
    file.write("".join(lines))
    file.close()