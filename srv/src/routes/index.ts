// Import Router Object
import { Router } from "@awaitjs/express";
import authRouter from "./auth";

// Create a Router
const router = Router();
// Handle Routes
router.use(authRouter);

router.get("/", (req, res) => {
    res.json({
        message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
    });
});

// Expose the Router Object
export default router;
