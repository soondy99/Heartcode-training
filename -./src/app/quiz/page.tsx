// "use client"

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod"
// import { z } from "zod";
// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Button } from "@/components/ui/button";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Input } from "@/components/ui/input";
// import { toast, useToast } from "@/hooks/use-toast";

// const FormSchema = z.object({
// 	name: z.string({
//     	required_error: "Please enter a name"
// 	}).min(2, {
//     	message: "name must be more than 2 characters long"
// 	}).max(20, {
//     	message: "name must be no longer than 20 characters"
// 	}),
// 	question1: z.string({
//     	required_error: "Please select an option"
// 	})
// })


// export default function Quiz() {
// 	const { toast } = useToast();

// 	const form = useForm<z.infer<typeof FormSchema>>({
//     	resolver: zodResolver(FormSchema)
// 	})

// 	function onSubmit(data: z.infer<typeof FormSchema>) {
//     if (data.question1 === "yes") {
//         toast({
//             title: `Congratulations ${data.name}`,
//             description: "You are a drug dealer",
//         })
//     } else {
//         toast({
//             title: `Thank you ${data.name}`,
//             description: "Unfortunately you are not a drug dealer",
//         })
//     }
//   }

// 	return (
//     	<Form {...form}>
//         	<form onSubmit={form.handleSubmit(onSubmit)} className="w2/3 space-y-6">
//             	<FormField
//                 	control={form.control}
//                 	name="name"
//                 	render={({ field }) => (
//                     	<FormItem>
//                         	<FormLabel>Question 1:</FormLabel>
//                         	<FormDescription>What is your name?</FormDescription>
//                             	<FormControl>
//                                 	<Input placeholder="your name here" {...field}/>
//                             	</FormControl>
//                         	<FormMessage/>
//                     	</FormItem>
//                 	)}
//             	/>
//             	<FormField
//                 	control={form.control}
//                 	name="question1"
//                 	render={({ field }) => (
//                     	<FormItem>
//                         	<FormLabel>Question 2:</FormLabel>
//                         	<FormDescription>Do you sell drugs?</FormDescription>
//                         	<Select onValueChange={field.onChange} defaultValue={field.value}>
//                             	<FormControl>
//                                 	<SelectTrigger>
//                                     	<SelectValue placeholder="Please select an answer"/>
//                                 	</SelectTrigger>
//                             	</FormControl>
//                             	<SelectContent>
//                                 	<SelectItem value="yes">Yes</SelectItem>
//                                 	<SelectItem value="no">No</SelectItem>
//                             	</SelectContent>
//                         	</Select>
//                         	<FormMessage/>x
//                     	</FormItem>
//                 	)}
//             	/>
//             	<Button type="submit">Submit</Button>
//         	</form>
//     	</Form>
// 	)
// }




"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { toast, useToast } from "@/hooks/use-toast";

const FormSchema = z.object({
	name: z.string({
		required_error: "Please enter your name"
	}).min(2, {
		message: "Name must be more than 2 characters long"
	}).max(10, {
		message: "Name must be no longer than 10 characters"
	}),
	question1: z.string(),
	question2: z.string(),
	question3: z.string(),
	question4: z.string(),
	question5: z.string(),
});

export default function Quiz() {
	const { toast } = useToast();

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema)
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		let score = 0;

		// Example scoring logic (adjust based on correct answers)
		if (data.question1 === "B") score++;
		if (data.question2 === "B") score++;
		if (data.question3 === "B") score++;
		if (data.question4 === "D") score++;
		if (data.question5 === "B") score++;

		toast({
			title: `Thank you for participating, ${data.name}!`,
			description: `Your score: ${score}/5. Thank you for raising awareness!`,
		});
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w2/3 space-y-6">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name:</FormLabel>
							<FormDescription>What is your name?</FormDescription>
							<FormControl>
								<Input placeholder="Your name here" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="question1"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Question 1:</FormLabel>
							<FormDescription>What is a common physical sign of drug abuse?</FormDescription>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Please select an answer" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="A">Increased energy</SelectItem>
									<SelectItem value="B">Bloodshot eyes</SelectItem>
									<SelectItem value="C">Improved concentration</SelectItem>
									<SelectItem value="D">Better sleep quality</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="question2"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Question 2:</FormLabel>
							<FormDescription>Which of the following is a potential consequence of drug abuse?</FormDescription>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Please select an answer" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="A">Improved social skills</SelectItem>
									<SelectItem value="B">Legal issues</SelectItem>
									<SelectItem value="C">Better academic performance</SelectItem>
									<SelectItem value="D">Enhanced creativity</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="question3"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Question 3:</FormLabel>
							<FormDescription>What is one of the most effective ways to prevent drug abuse among teenagers?</FormDescription>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Please select an answer" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="A">Ignoring the issue</SelectItem>
									<SelectItem value="B">Open communication about risks</SelectItem>
									<SelectItem value="C">Allowing them to experiment</SelectItem>
									<SelectItem value="D">Social isolation</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="question4"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Question 4:</FormLabel>
							<FormDescription>Which substance is commonly associated with addiction and withdrawal symptoms?</FormDescription>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Please select an answer" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="A">Caffeine</SelectItem>
									<SelectItem value="B">Alcohol</SelectItem>
									<SelectItem value="C">Sugar</SelectItem>
									<SelectItem value="D">Nicotine</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="question5"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Question 5:</FormLabel>
							<FormDescription>What is a common reason individuals may turn to drug use?</FormDescription>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Please select an answer" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="A">To enhance their health</SelectItem>
									<SelectItem value="B">To cope with stress or trauma</SelectItem>
									<SelectItem value="C">To improve their relationships</SelectItem>
									<SelectItem value="D">To achieve personal goals</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
}
