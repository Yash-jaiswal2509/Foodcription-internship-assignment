class apiError extends Error {
  statusCode: number;
  message: string;
  errors?: any[];
  stack?: string | undefined;
  success: boolean = false;
  data: any = null;

  constructor(
    statusCode: number,
    message: string = "Something went wrong",
    errors?: [],
    stack?: string
  ) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.errors = errors;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { apiError };
