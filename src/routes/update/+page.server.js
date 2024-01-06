import PocketBase from 'pocketbase';
import {SECRET_EMAIL,SECRET_PASSWORD} from '$env/static/private';

export async function load() {
    const pb = new PocketBase("http://127.0.0.1:8090");
    await pb.admins.authWithPassword(SECRET_EMAIL,SECRET_PASSWORD);

    // you can also fetch all records at once via getFullList
    const records = await pb.collection('jobs').getFullList(200,{
        sort: '-created',
    });

   const results = records.map((record) => {return {jobname: record.jobname, salary: record.salary, 
    id: record.id}});
    
    return {
        records: results
    };
};

export const actions={
    update: async ({request})  => {
        const pb = new PocketBase("http://127.0.0.1:8090");
        await pb.admins.authWithPassword(SECRET_EMAIL,SECRET_PASSWORD);

        const form = await request.formData();

        const jobname = form.get('jobname') ?? '';
        const salary = form.get('salary')?? '';
        const id = form.get('id')?? '';

        const newRecord = {
            jobname,
            salary
        };

        const record = await pb.collection('jobs').update(id.toString(), newRecord);
    }
}