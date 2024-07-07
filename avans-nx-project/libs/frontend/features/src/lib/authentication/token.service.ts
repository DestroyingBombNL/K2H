import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class TokenProvider {
    private readonly CURRENT_TOKEN = 'usertoken';

    getToken(): string | undefined {
        const token = localStorage.getItem(this.CURRENT_TOKEN);
        if (!token) return undefined;
        return token;
    }

    setToken(token: string): void {
        localStorage.setItem(this.CURRENT_TOKEN, token);
    }

    removeToken(): void {
        localStorage.removeItem(this.CURRENT_TOKEN);
    }
}