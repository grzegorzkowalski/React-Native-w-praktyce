const goOutdoor = (name, month) => {
    const seasons = new Map();
    seasons.set("styczeń", "winter");
    seasons.set("luty", "winter");
    seasons.set("marzec", "spring");
    seasons.set("kwiecień", "spring");
    seasons.set("maj", "spring");
    seasons.set("czerwiec", "summer");
    seasons.set("lipiec", "summer");
    seasons.set("sierpień", "summer");
    seasons.set("wrzesień", "fall");
    seasons.set("październik", "fall");
    seasons.set("listopad", "fall");
    seasons.set("grudzień", "winter");

    const actualSeason = seasons.get(month.toLowerCase());
    console.log(actualSeason);
    const actions = {
        "winter": `${name} jeździ na sankach.`,
        "spring": `${name} chodzi po kałużach.`,
        "summer": `${name} się opala.`,
        "fall": `${name} zbiera liscie.`,
    }
    return actions[actualSeason];
}

export default goOutdoor;