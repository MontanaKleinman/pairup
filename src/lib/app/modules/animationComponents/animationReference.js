const playerId = document.getElementsByClassName('playerId')
const comboCounterEl = document.getElementsByClassName('player__combo')

export let animationReference = {

    particles: function(combo, comboCo, playerCounter) {
        if (combo[playerCounter] >= 2 || comboCo >= 2) {
        if (document.getElementsByClassName("cooperative").length > 0) {
            for (let i = 0; i < playerId.length; i++) {
            comboCounterEl[i].classList.add("flux")
            }} else {
        comboCounterEl[playerCounter].classList.add("flux")
            }
            if (combo[playerCounter] >= 4 || comboCo >= 4) {
            if (document.getElementsByClassName("cooperative").length > 0) {
                for (let i = 0; i < playerId.length; i++) {
                playerId[i].querySelectorAll('.particle').forEach(function(element) {
                    element.style.removeProperty("opacity")})
                }} else {
            playerId[playerCounter].querySelectorAll('.particle').forEach(function(element) {
            element.style.removeProperty("opacity")})
                }
                if (combo[playerCounter] >= 32 || comboCo >= 32) {
                if (document.getElementsByClassName("cooperative").length > 0) {
                    for (let i = 0; i < playerId.length; i++) {
                    playerId[i].querySelectorAll('.particle').forEach(function(element) {
                        element.style.animationDuration = "45s";})
                    }} else {
                playerId[playerCounter].querySelectorAll('.particle').forEach(function(element) {
                element.style.animationDuration = "45s";})
                    }
                    if (combo[playerCounter] >= 256 || comboCo >= 256) {
                        if (document.getElementsByClassName("cooperative").length > 0) {
                        for (let i = 0; i < playerId.length; i++) {
                            playerId[i].querySelectorAll('.particle').forEach(function(element) {
                            element.style.animationDuration = "45s";})
                            }} else {
                        playerId[playerCounter].querySelectorAll('.particle').forEach(function(element) {
                        element.style.animationDuration = "30s";})   
                        }
                        if (combo[playerCounter] >= 2048 || comboCo >= 2048) {
                        if (document.getElementsByClassName("cooperative").length > 0) {
                            for (let i = 0; i < playerId.length; i++) {
                            playerId[i].querySelectorAll('.particle').forEach(function(element) {
                                element.style.animationDuration = "15s";})
                            }} else {
                        playerId[playerCounter].querySelectorAll('.particle').forEach(function(element) {
                        element.style.animationDuration = "15s";})
                            }
                            }    
                    }
                }
            }
        }
    }
}