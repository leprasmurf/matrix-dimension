import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Integration } from "./models/integration";

@Injectable()
export class ApiService {
    constructor(private http: Http) {
    }

    checkScalarToken(scalarToken): Promise<boolean> {
        return this.http.get("/api/v1/scalar/checkToken", {params: {scalar_token: scalarToken}})
            .map(res => res.status === 200).toPromise();
    }

    getIntegrations(roomId, scalarToken): Promise<Integration[]> {
        return this.http.get("/api/v1/dimension/integrations/" + roomId, {params: {scalar_token: scalarToken}})
            .map(res => res.json()).toPromise();
    }

    removeIntegration(roomId: string, type: string, integrationType: string, scalarToken: string): Promise<any> {
        return this.http.delete("/api/v1/dimension/integrations/" + roomId + "/" + type + "/" + integrationType, {params: {scalar_token: scalarToken}})
            .map(res => res.json()).toPromise();
    }
}
