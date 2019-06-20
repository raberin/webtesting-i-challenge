const enhancer = require("./enhancer.js");
// test away!

describe("the enhancer", () => {
  describe("the repair function", () => {
    it("should restore the durability", () => {
      //arrange
      const longsword = {
        name: "longsword",
        durability: 85,
        enhancement: 5
      };

      //act
      const result = enhancer.repair(longsword);

      //assert
      expect(result.durability).toBe(100);
    });
  });
  describe("the success function", () => {
    it("should increase the enhancement value by 1", () => {
      const longsword = {
        name: "longsword",
        durability: 85,
        enhancement: 5
      };

      const result = enhancer.succeed(longsword);

      expect(result.enhancement).toBe(6);
    });
  });

  describe("the fail function", () => {
    it("should decrease durability", () => {
      const longsword = {
        name: "longsword",
        durability: 85,
        enhancement: 5
      };

      const longsword1 = {
        name: "longsword",
        durability: 85,
        enhancement: 17
      };

      const result = enhancer.fail(longsword);
      const result1 = enhancer.fail(longsword1);

      expect(result.durability).toBe(80);
      expect(result1.durability).toBe(75);
    });
    it("should decrease enhancement", () => {
      const longsword1 = {
        name: "longsword",
        durability: 85,
        enhancement: 17
      };

      const result1 = enhancer.fail(longsword1);

      expect(result1.enhancement).toBe(16);
    });
  });
});
