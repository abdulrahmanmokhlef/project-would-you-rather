

export const saveTolocalStorage = (key ='state', state) => {
	try {
	const serialState = JSON.stringify(state);
	localStorage.setItem(key, serialState);
	} catch(err) {
		console.log(err);
	}
};


export const loadFromLocalStorage = (key ='state') => {
    debugger
    try {
      const serialState = localStorage.getItem(key);
      if (serialState === null) {
        return undefined;
      }
      return JSON.parse(serialState);
    } catch (err) {
      return undefined;
    }
};


export const removeFromLocalstorage = (key) => {
    debugger
    sessionStorage.removeItem(key);
}