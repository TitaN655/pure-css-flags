var flagContainers = document.getElementsByClassName("flag-container");

for (var i = 0; i < flagContainers.length; i++)
{
    flagContainers[i].addEventListener(
        "click",
        (function(i)
        {
            return function()
            {
                toggleScalable(flagContainers[i]);
            }
        })(i),
        false);
}

function toggleScalable(element)
{
    var parent = element.parentElement;

    if (parent.classList.contains("scalable"))
    {
        parent.classList.remove("scalable");
    }
    else
    {
        var flagContainers = document.getElementsByClassName("flag-container");
        for (var i = 0; i < flagContainers.length; i++)
        {
            var containerParent = flagContainers[i].parentElement;
            containerParent.classList.remove("scalable")
        }

        parent.classList.add("scalable");
    }

    parent.scrollIntoView(true);
}

function updateAspectRatio(elementId, ratio)
{
    var element = document.getElementById(elementId);
    element.setAttribute("data-aspect-ratio", ratio);
}