import * as express from "express";
import {Request, Response} from "express";
import * as bodyParser from  "body-parser";
import {createConnection} from "typeorm";
import {Location} from "./entity/Location";

// create typeorm connection
createConnection().then(connection => {
    const locationRepository = connection.getRepository(Location);

    // create and setup express app
    const app = express();
    app.use(bodyParser.json());

    // register routes

    app.get("/locations", async function(req: Request, res: Response) {
        const locations = await locationRepository.find();
        res.json(locations);
    });

    app.get("/locations/:id", async function(req: Request, res: Response) {
        const results = await locationRepository.findOne(req.params.id);
        return res.send(results);
    });

    app.post("/locations", async function(req: Request, res: Response) {
        const location = await locationRepository.create(req.body);
        const results = await locationRepository.save(location);
        return res.send(results);
    });

    app.put("/locations/:id", async function(req: Request, res: Response) {
        const location = await locationRepository.findOne(req.params.id);
        locationRepository.merge(location, req.body);
        const results = await locationRepository.save(location);
        return res.send(results);
    });

    app.delete("/locations/:id", async function(req: Request, res: Response) {
        const results = await locationRepository.delete(req.params.id);
        return res.send(results);
    });

    // start express server
    app.listen(3000);
});