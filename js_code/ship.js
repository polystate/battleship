

//Ship Factory Function

const Ship = (length,name,origin) => {
    //Main attributes
    // const shipBody = new Array(length).fill(true);
    const shipLength = length;
    const shipName = name;
    const shipOrigin = origin;

    //Methods
    const getHit = (target) => {
        shipBody[target] = false;
    }
    const isSunk = () => {
        if(shipBody.every(target => !target)){
            return true;
        } else return false;
    }

    return { shipLength, shipName, shipOrigin, getHit, isSunk };
}

// module.exports = Ship;










