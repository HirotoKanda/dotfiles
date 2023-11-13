# Executes commands at the start of an interactive session.
neofetch
[[ -r ~/Repos/znap/znap.zsh ]] ||
    git clone --depth 1 -- \
        https://github.com/marlonrichert/zsh-snap.git ~/Repos/znap
source ~/Repos/znap/znap.zsh  # Start Znap

# echo ""

# Initialize Starship
eval "$(starship init zsh)"
znap source marlonrichert/zsh-autocomplete
setopt globdots 

# brew doctor 対策
alias brew="env PATH=${PATH/\/Users\/jai/\.pyenv\/versions/} brew"

export GS_OPTIONS=-dNEWPDF=true



