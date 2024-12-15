import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const projectRouter = createTRPCRouter({
  // createProject: publicProcedure.input().mutation(async ({ ctx, input }) => {
  //   console.log("project");
  //   return true;
  // }),
});
