import { sanitizePhoneNumber, verifyPhoneNumber } from "../index";


describe("Nigerian Phone Number Validator", () => {
	it("should verify valid phone numbers", () => {
		expect(verifyPhoneNumber("2348139922348")).toBe(true);
    });
    it("should verify invalid phone numbers", () => {
        expect(verifyPhoneNumber("23481399223486")).toBe(false);
    })
    it("should sanitize phone numbers", () => {
        expect(sanitizePhoneNumber("08139922348")).toBe("2348139922348");
        expect(sanitizePhoneNumber("2348139922348")).toBe("2348139922348");
        expect(() => sanitizePhoneNumber("23481399223486", { mode: "throwInvalid"})).toThrowError();
        expect(sanitizePhoneNumber("23481399223486", { mode: "passthrough"})).toBe("23481399223486");
        expect(sanitizePhoneNumber("11111", { mode: "passthrough"})).toBe("11111");
    })
});