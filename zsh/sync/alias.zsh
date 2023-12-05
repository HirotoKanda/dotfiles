# terminal color
# LSCOLORS=exfxcxdxbxegedabagacad
alias ls='lsd -l'
alias tree='lsd -l --tree'

function custom_cd()
{
  \cd $@ && ls
}
alias cd='custom_cd'

# reboot shell
alias reboot='exec $SHELL -l'

#application alias

#LaTeX Template commands

alias as="cd ~"