# pyenv
PYENV_ROOT=~/.pyenv
export PATH=$PYENV_ROOT/bin:$PATH
export PATH="~/.pyenv/versions/anaconda3-2023.09-0/bin/:$PATH"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/Users/jai/.pyenv/versions/anaconda3-5.3.1/bin/conda' 'shell.zsh' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/Users/jai/.pyenv/versions/anaconda3-5.3.1/etc/profile.d/conda.sh" ]; then
        . "/Users/jai/.pyenv/versions/anaconda3-5.3.1/etc/profile.d/conda.sh"
    else
        export PATH="/Users/jai/.pyenv/versions/anaconda3-5.3.1/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<