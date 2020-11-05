import { Response } from "express";

/**
 * Class Controller, Responsible for standardizing responses.
 */
export default class Controller {

  /**
   * Response to success create
   * @param response 
   * @param data 
   */
  response(response: Response, data: any) {
    return response.json({
      success: true, data
    });
  }

  /**
   * Response to success create
   * @param response 
   * @param data 
   */
  response201(response: Response, data: any) {
    return response.status(201).json({
      success: true, data
    });
  }

  /**
   * Response to error
   * @param response 
   * @param error 
   */
  error(response: Response, error: any) {
    return response.status(400).json({
      success: false, error
    });
  }
}