# Executes commands at the start of an interactive session.
neofetch
lsd -l
# Initialize Starship
eval "$(starship init zsh)"
setopt globdots 

# brew doctor 対策
alias brew="env PATH=${PATH/\/Users\/jai/\.pyenv\/versions/} brew"

export GS_OPTIONS=-dNEWPDF=true



