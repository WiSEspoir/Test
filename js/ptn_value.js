// HP of campliance%
var compHP = {
    comp1to10: 750,
    comp11to20: 1500,
    comp21to30: 2250,
    comp31to40: 3000,
    comp41to50: 3750,
    comp51to60: 6000,
    comp61to70: 7500,
    comp71to80: 9000,
    comp81to90: 11250,
    comp91to100: 22500
}

// Cube of HP
var cubeHP = {
    stage1Cube: 40,
    stage2Cube: 80,
    stage3Cube: 120,
    stage4Cube: 200,
    stage5Cube: 300
}

// get Compliance of each stage
// getFull: 1 = 從零開始累計, 2 = 單階段, 3 = 每一%
function getCompHP10(getValue) {
    if (getValue == 1) {
        return compHP.comp1to10;
    } else if (getValue == 2) {
        return compHP.comp1to10;
    } else if (getValue == 3) {
        return compHP.comp1to10 / 10;
    }

}

function getCompHP20(getValue) {
    if (getValue == 1) {
        return getCompHP10(getValue) + compHP.comp11to20;
    } else if (getValue == 2) {
        return compHP.comp11to20;
    } else if (getValue == 3) {
        return compHP.comp11to20 / 10;
    }
}

function getCompHP30(getValue) {
    if (getValue == 1) {
        return getCompHP20(getValue) + compHP.comp21to30;
    } else if (getValue == 2) {
        return compHP.comp21to30;
    } else if (getValue == 3) {
        return compHP.comp21to30 / 10;
    }
}

function getCompHP40(getValue) {
    if (getValue == 1) {
        return getCompHP30(getValue) + compHP.comp31to40;
    } else if (getValue == 2) {
        return compHP.comp31to40;
    } else if (getValue == 3) {
        return compHP.comp31to40 / 10;
    }
}

function getCompHP50(getValue) {
    if (getValue == 1) {
        return getCompHP40(getValue) + compHP.comp41to50;
    } else if (getValue == 2) {
        return compHP.comp41to50;
    } else if (getValue == 3) {
        return compHP.comp41to50 / 10;
    }
}

function getCompHP60(getValue) {
    if (getValue == 1) {
        return getCompHP50(getValue) + compHP.comp51to60;
    } else if (getValue == 2) {
        return compHP.comp51to60;
    } else if (getValue == 3) {
        return compHP.comp51to60 / 10;
    }
}

function getCompHP70(getValue) {
    if (getValue == 1) {
        return getCompHP60(getValue) + compHP.comp61to70;
    } else if (getValue == 2) {
        return compHP.comp61to70;
    } else if (getValue == 3) {
        return compHP.comp61to70 / 10;
    }
}

function getCompHP80(getValue) {
    if (getValue == 1) {
        return getCompHP70(getValue) + compHP.comp71to80;
    } else if (getValue == 2) {
        return compHP.comp71to80;
    } else if (getValue == 3) {
        return compHP.comp71to80 / 10;
    }
}

function getCompHP90(getValue) {
    if (getValue == 1) {
        return getCompHP80(getValue) + compHP.comp81to90;
    } else if (getValue == 2) {
        return compHP.comp81to90;
    } else if (getValue == 3) {
        return compHP.comp81to90 / 10;
    }
}

function getCompHP100(getValue) {
    if (getValue == 1) {
        return getCompHP90(getValue) + compHP.comp91to100;
    } else if (getValue == 2) {
        return compHP.comp91to100;
    } else if (getValue == 3) {
        return compHP.comp91to100 / 10;
    }
}

// get Compliance
function getHPNeedByComp(comp) {
    if (comp >= 0 && comp <= 10) {
        return comp * getCompHP10(3);
    } else if (comp >= 11 && comp <= 20) {
        return (comp - 10) * getCompHP20(3) + getCompHP10(1);
    } else if (comp >= 21 && comp <= 30) {
        return (comp - 20) * getCompHP30(3) + getCompHP20(1);
    } else if (comp >= 31 && comp <= 40) {
        return (comp - 30) * getCompHP40(3) + getCompHP30(1);
    } else if (comp >= 41 && comp <= 50) {
        return (comp - 40) * getCompHP50(3) + getCompHP40(1);
    } else if (comp >= 51 && comp <= 60) {
        return (comp - 50) * getCompHP60(3) + getCompHP50(1);
    } else if (comp >= 61 && comp <= 70) {
        return (comp - 60) * getCompHP70(3) + getCompHP60(1);
    } else if (comp >= 71 && comp <= 80) {
        return (comp - 70) * getCompHP80(3) + getCompHP70(1);
    } else if (comp >= 81 && comp <= 90) {
        return (comp - 80) * getCompHP90(3) + getCompHP80(1);
    } else if (comp >= 91 && comp <= 100) {
        return (comp - 90) * getCompHP100(3) + getCompHP90(1);
    }
}

// 計每天需要多少異方晶
function calCubeOfHP(value) {
    if (value == 0) return 0;
    else if (value == 1) return cubeHP.stage1Cube;
    else if (value == 2) return calCubeOfHP(1) + cubeHP.stage1Cube;
    else if (value == 3) return calCubeOfHP(2) + cubeHP.stage2Cube;
    else if (value == 4) return calCubeOfHP(3) + cubeHP.stage2Cube;
    else if (value == 5) return calCubeOfHP(4) + cubeHP.stage3Cube;
    else if (value == 6) return calCubeOfHP(5) + cubeHP.stage3Cube;
    else if (value == 7) return calCubeOfHP(6) + cubeHP.stage4Cube;
    else if (value == 8) return calCubeOfHP(7) + cubeHP.stage4Cube;
    else if (value == 9) return calCubeOfHP(8) + cubeHP.stage5Cube;
    else if (value >= 10) return calCubeOfHP(9) + cubeHP.stage5Cube;
}
