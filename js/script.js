const flagContainers = document.getElementsByClassName("flag-container");

for (let containerNo = 0; containerNo < flagContainers.length; containerNo++)
{
    const container = flagContainers[containerNo];

    container.addEventListener('click',
        toggleScalable
            .bind(null, container));

    var flagRatios = container.getElementsByClassName("ratios");

    if (flagRatios.length > 0)
    {
        var flagRatio = flagRatios[0];
        var ratioList = flagRatio.getAttribute("data-ratios")
            .split(',');

        for (let ratioIndex = 0; ratioIndex < ratioList.length; ratioIndex++) {
            var aspectRatio = ratioList[ratioIndex];

            flagRatio.innerHTML += 
                `<li>
                    <a href=\"javascript:void(0)\" data-aspect-ratio=\"${aspectRatio}\">${aspectRatio}</a>
                </li>`;
        }

        flagRatio.querySelectorAll("a").forEach(element =>
        {
            element.addEventListener('click',
                (event) => updateAspectRatio(event,
                    container.querySelector("div[id]"),
                    element.getAttribute("data-aspect-ratio")));
        });
    }
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
        for (var i = 0; i < flagContainers.length; i++)
        {
            var containerParent = flagContainers[i].parentElement;
            containerParent.classList.remove("scalable")
        }

        parent.classList.add("scalable");
    }

    parent.scrollIntoView(true);
}

function updateAspectRatio(event, element, ratio)
{
    event.stopPropagation();
    element.setAttribute("data-aspect-ratio", ratio);
}