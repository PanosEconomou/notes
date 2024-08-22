#!/usr/bin/env python3

import sys
import os

if __name__=='main':
    if len(sys.argv) != 2:
        print("Usage: python add_new_line.py <directory>")
        sys.exit(1)


    input_file = sys.argv[1]
    file_extension = '.md'
    if not input_file.endswith(file_extension): 
        print('Nothing to Format in '+input_file)
        sys.exit(0)

    if "host" in input_file:
        print("I'm not touching your code!")
        sys.exit(0)

    try:
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

        print('Formatted '+input_file)

    except FileNotFoundError:
        print("I couldn't find that file. Skipping.")
        sys.exit(0)

