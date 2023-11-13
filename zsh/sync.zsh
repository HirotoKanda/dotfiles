# Executes commands at the start of an interactive session.
neofetch
# echo ""

# Initialize Starship
eval "$(starship init zsh)"
setopt globdots 

# reboot shell
alias reboot='exec $SHELL -l'

#application alias
alias firefox="open -a Firefox"

#LaTeX Template commands
alias homework="cp -r /Users/jai/uni/tm/hw homework"

# brew doctor 対策
alias brew="env PATH=${PATH/\/Users\/jai/\.pyenv\/versions/} brew"

export GS_OPTIONS=-dNEWPDF=true



