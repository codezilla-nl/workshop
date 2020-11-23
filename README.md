# CODEZILLA Workshop

This repository contains all neccesary things to get started with our workshop.
Please make sure you have installed all things listed down here.

We reccomend that you install and use [Visual Studio Code](https://code.visualstudio.com/Download) for this workshop; it's possible to use another IDE, but we'll not be able to support you properly if you run into issues

## Things to install
1. Node.js
2. Git (optional)
3. Visual Studio Code

### Node.js
You will need Node.js on your local machine to get things working, please see the instructions below for your OS of choice

#### MacOS and Linux
Install nvm via curl or wget

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.0/install.sh | bash

wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.0/install.sh | bash
```
and add these lines below to one of these ~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc files and reopen the terminal when you're done.

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

Finally execute the following commands to install and use the correct version of Node.js.

```
nvm install
```

and

```
nvm use
```

#### Windows
Download and install Node.js via https://nodejs.org/en/download/

### Downloading this repository
You can either get the code the code by [downloading this repository](https://github.com/codezilla-nl/workshop/archive/master.zip), or by cloning it locally


### Visual Studio Code
Please install Visual Studio Code via your App Store of choice, or by going to https://code.visualstudio.com/