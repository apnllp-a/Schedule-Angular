exports.Call = function(){
    const { set, to, fromTo } = gsap

const loadingTime = 5000
const resetTime = 5000

document.querySelectorAll('.publish-button').forEach(button => {
    let tweenHover = to(button, {
        paused: true,
        keyframes: [{
            '--icon-arrow-y': '-2px',
            '--icon-line-offset': '23px',
            duration: .15
        }, {
            '--icon-arrow-y': '0px',
            '--icon-line-offset': '21px',
            duration: .3
        }]
    }),
    interval;

    button.addEventListener('pointerenter', e => {
        if(button.classList.contains('animated')) {
            return
        }
        tweenHover.restart()
        interval = setInterval(() => tweenHover.restart(), 1000)
    });

    button.addEventListener('pointerleave', e => clearInterval(interval))

    button.addEventListener('click', e => {
        e.preventDefault()

        if(button.classList.contains('animated')) {
            return
        }
        button.classList.add('animated')

        let text = button.querySelector('.text'),
            normal = text.querySelector('.normal'),
            progress = text.querySelector('.progress'),
            done = text.querySelector('.done'),
            normalWidth = normal.offsetWidth

        clearInterval(interval)
        tweenHover.pause()

        let cloud = button.querySelector('.cloud'),
            cloudInterval,
            clone = cloud.cloneNode(true)

        gsap.to(button, {
            '--icon-cloud-y': '32px',
            duration: .15
        })

        cloudInterval = setInterval(() => {
            createCloud(clone, button.querySelector('.icon'))
        }, 400)

        let tweenArrow = fromTo(button, {
            '--icon-arrow-y': '0px',
            '--icon-line-offset': '21px',
            duration: .15
        }, {
            repeat: -1,
            keyframes: [{
                '--icon-arrow-y': '-6px',
                '--icon-line-offset': '24px',
                duration: .6,
            }, {
                '--icon-arrow-y': '0px',
                '--icon-line-offset': '21px',
                duration: .85,
                ease: 'power2.out'
            }]
        })

        to(button, {
            onStart() {
                to(text, {
                    width: progress.offsetWidth,
                    duration: .15
                })
            },
            '--text-normal-o': 0,
            '--text-normal-y': '8px',
            duration: .25
        })

        to(button, {
            '--text-progress-o': 1,
            '--text-progress-y': '0px',
            duration: .3,
            delay: .1
        })

        setTimeout(() => {
            tweenArrow.pause()
            clearInterval(cloudInterval)
            to(button, {
                onStart() {
                    to(text, {
                        width: done.offsetWidth,
                        duration: .15
                    })
                },
                '--text-progress-o': 0,
                '--text-progress-y': '8px',
                duration: .25
            })
            to(button, {
                duration: .25,
                keyframes: [{
                    '--icon-line-offset': '13px'
                }, {
                    '--icon-arrow-offset': '4px'
                }]
            })
            to(button, {
                '--text-done-o': 1,
                '--text-done-y': '0px',
                duration: .3,
                delay: .1
            })
            to(button, {
                '--icon-tick-offset': '0px',
                duration: .25,
                delay: .3
            })
            to(button, {
                '--icon-circle-scale': 1,
                duration: .7,
                delay: .2,
                ease: 'elastic.out(1, .75)'
            })
            setTimeout(() => {
                reset(button, normalWidth, text)
            }, resetTime)
        }, loadingTime)
    })
})

function createCloud(node, parent) {
    let elem = node.cloneNode(true)
    parent.appendChild(elem)
    set(elem, {
        x: gsap.utils.random(-8, 8),
        y: -36
    })
    to(elem, {
        y: 36,
        duration: gsap.utils.random(.4, 1.5),
        onComplete() {
            elem.remove()
        }
    })
}

function reset(button, normalWidth, text) {
    to(button, {
        onStart() {
            to(text, {
                width: normalWidth,
                duration: .15,
                clearProps: true
            })
        },
        '--text-done-o': 0,
        '--text-done-y': '8px',
        duration: .25
    })
    fromTo(button, {
        '--text-normal-y': '-8px'
    }, {
        '--text-normal-o': 1,
        '--text-normal-y': '0px',
        duration: .3,
        delay: .1
    })
    to(button, {
        keyframes: [{
            '--icon-tick-offset': '11px',
            '--icon-circle-scale': 0,
            '--icon-arrow-y': '0px',
            duration: .2
        }, {
            '--icon-cloud-y': '0px',
            '--icon-line-offset': '21px',
            duration: .2
        }, {
            '--icon-arrow-offset': '0px',
            duration: .15
        }],
        clearProps: true,
        onComplete() {
            button.classList.remove('animated')
        }
    })
}

}