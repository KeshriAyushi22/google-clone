## WHAT DID I ACTUALLY LEARNED IN THIS BUILD?

--Most of them are written in details in comments of each push.

Broad Learnings:

1.  With btn on click fn, only mouseClick event will be captured, but if we enclose it in a form , then keyBoardclick is also captured.
    Also, it will make the whole compone as form and try to submit it.
2.  To center an image, if flex, try flex-direction:col and Remove that blue line of input use outline-input:0
3.  if useState() -> it will give error of uncontrolled to controlled component error instead , useState("") for empty string is best way.
4.  const history = useHistory(); then history.push("/abc") can be used for redirection of pages.
