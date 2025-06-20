# what is reconcilation  in react?
-> a recursive algorithm used by react to check the differences between browser's dom tree and virtual dom tree to make changes in the ui

# why keys are used for diffing of two lists or arrays in react?
without keys react might not knw which thing has changed and it might render all the uneccessar things
with keys react will know where changes is made and other items will remain intact and the performance will be optimal

# what is the core purpose of fiber in react?
fiber is react reconcilation engine 
main features of fiber :-
-> pause current work and come back to it later
-> assigning priority to different type of work
-> reuse previously completed work
-> abort work if its no longer needed