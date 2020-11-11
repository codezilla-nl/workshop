# Node.js workshop

## Requirements
- node >=12
- nvm (optional, Mac and Linux only)

## Installation

### nvm (_Mac and Linux only_)
Install nvm via `curl` or `wget`

``` shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.0/install.sh | bash

wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.0/install.sh | bash
```
and add these lines below to one of these `~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc` files and reopen the terminal when you're done.

``` bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

Finally execute the following commands to install and use the correct version of Node.js.

``` shell
nvm install
``` 
and 
``` shell
nvm use
```

### Node.js (_Windows only_)
Download and install Node.js via https://nodejs.org/en/download/

### Install dependencies
If you don't have nvm but you have already installed Node.js, run
``` shell
npm install
``` 

### Use
Execute 
``` shell
npm start
```
to run the application. Accessible via http://localhost:4000.
