# eclipse-draft

This is a program used to draft factions in the board game Eclipse: Second Dawn

The algorithm of this program is that after clicking the "Begin Draft" button, each player is presented with a choice of two of the available races to choose. Clicking on the race will bring up a confirmation, and after clicking "Yes," selects it for the player and removes that race from the available pool for future players. Selecting a race will bring up another two races (potentially after a brief message of informing the next player) from the remaining pool of available races. This continues until all 6 races have been chosen or the "Conclude Draft" Button has been clicked.

After completing the draft a list of all players and their chosen races are displayed, as well as a "Reset Draft" Button