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

# what is useCallback() hook in react ?
it allows react to store the function in the memory between re-rendering
useCallback(fn,dependencies) -> dependencies or useState variables in array format
yeh function ko memorize kr leta ha jitna ho sake

# what is the role of useEffect() in react ?
it runs when the page first reloads and  also runs whenever any changes are made to any of its dependencies

# what is useRef() hook in react?
whenever something's reference is required useRef() hook is used
it is used as variable