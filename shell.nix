{ pkgs ? import <nixpkgs> {  } }:
with pkgs;
mkShell {
  buildInputs = [ nodejs-16_x yarn ];
  shellHook = ''
    export PS1='\n\[\033[1;34m\][mazynetwork-env:\w]\$\[\033[0m\] '
  '';
}
