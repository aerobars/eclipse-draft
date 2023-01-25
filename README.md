# eclipse-draft

This is a program used to draft factions in the board game Eclipse: Second Dawn

Pseudocode:
When the Begin Draft button is pressed, array of available races is randomized and two are displayed as buttons.
When one of them is clicked, a confirmation window displays to confirm choice.
After choice is confirmed, the chosen race is removed from the list of available races, and the draft process repeats
A third End Draft button is displayed on every draft choice page, if pressed after 2 players have chosen it will end the draft and display results as per line 11
If 2 or less players have chosen same process as pushin Reset Draft (line 12)
After completing the draft a list of all players and their chosen races are displayed, as well as a "Reset Draft" Button
Pushing Reset Draft will return to will return to Begin Draft page and reset available Races array