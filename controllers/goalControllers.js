const getGoals =(req, res) => {
    res.status(200).json({
        message: "Get Method Running"
    })
}

const setGoals = (req, res) => {
    res.status(200).json({
        message: "Set Method Running"
    })
}


module.export = { getGoals, setGoals}