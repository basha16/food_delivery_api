const { db } = require("../../database");

async function calculateDeliveryCost() {
    const sql = `SELECT A.*, B.first_name, B.last_name FROM public.user_assets A INNER JOIN public.user B ON A.assignee = B.id`
    const {rows} = await db.query(sql);
    return rows
}

module.exports = { getAllUserAssests};