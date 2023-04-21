export const sortBy = (e,data,setter) => {
    const mode = e.target.value;
    let sortedData;
    console.log(mode);
    switch (mode) {
      case "population-asc":
        sortedData = [...data].sort((a, b) => {
          if (a.population > b.population) return 1;
          else if (a.population < b.population) return -1;
          else return 0;
        });
        break;
      case "population-desc":
        sortedData = [...data].sort((a, b) => {
          if (a.population > b.population) return -1;
          else if (a.population < b.population) return 1;
          else return 0;
        });
        break;
      case "name-desc":
        sortedData = [...data].sort((a,b) => b.name.common.localeCompare(a.name.common));
        break;
        case "name-asc":
          sortedData = [...data].sort((a,b) => a.name.common.localeCompare(b.name.common));
          break;
      default:
        console.log(123);
        break;
    }
    setter(sortedData);
  };