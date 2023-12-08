# pyenv
PYENV_ROOT=~/.pyenv
export PATH=$PYENV_ROOT/bin:$PATH
export PATH="~/.pyenv/versions/anaconda3-2023.09-0/bin/:$PATH"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"