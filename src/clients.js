import { createClient } from "@sanity/client";

export default createClient({
    projectId: "uc6ppj8d", // find this at manage.sanity.io or in your sanity.json
    dataset: "production",
    apiVersion: '2021-10-21',// this is from those question during 'sanity init'
    useCdn: true,
});

