import { isUUID } from "class-validator";
export default function checkUUID_middleware(req, res, next) {
    const { id } = req.params;
    console.log("middleware fired");
    const valid_uuid = isUUID(id, "all");
    if (!valid_uuid) {
        res.statusCode = 400;
        res.json({ msg: "Value provided is not valid UUID" });
        return;
    }
    next();
}
//# sourceMappingURL=checkUUID_middleware.js.map