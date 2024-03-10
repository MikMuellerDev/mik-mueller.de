import sys
import base64

raw = sys.argv[1]
bs = base64.b64encode(raw.encode('ascii'))

print(bs.decode('ascii'))
