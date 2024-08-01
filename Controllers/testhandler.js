const Country = require("../Models/country_name");

exports.feadData = async (req, res) => {
    try {
        // Assuming req.body contains an array of objects for country data
        const countriesData = req.body;

        // Loop through the array of objects and create a country document for each one
        for (const countryData of countriesData) {
            const { country_id, country_code, country_name, country_description } = countryData;

            // Create a new country document
            const newCountry = new Country({
                country_id,
                country_code,
                country_name,
                country_description
            });

            // Save the country document to the database
            await newCountry.save();
        }

        res.status(200).json({
            success: true,
            message: "Countries created successfully"
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: "Error in creating countries"
        });
    }
};
