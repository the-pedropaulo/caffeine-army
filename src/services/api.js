let BASE = "http://localhost:3333";


export default {
    getEnterprise: async(cnpj, token) => {
        const res = await fetch(BASE+"/enterprise/"+cnpj, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        try {
            const json = await res.json();
            return json;
        } catch (error) {
            return;
        }

    },
    signIn: async (email, password) => {
        const res = await fetch(BASE+"/auth/signin", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        
        try {
            const json = await res.json();      
            return json;  
            
        } catch (error) {
            return;
        }
    }
}