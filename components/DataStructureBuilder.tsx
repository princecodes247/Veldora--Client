import clsx from "clsx";
import { Logo } from "./Logo";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useReducer, useState } from "react";
import { Delete, X } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Separator } from "./ui/separator";

interface DataItem {
  id: number;
  name: string;
  type: string;
  isUnique: string;
  isOptional: boolean;
  defaultValue: string;
}

type Action =
  | { type: "ADD_ITEM"; payload: DataItem }
  | { type: "REMOVE_ITEM"; payload: number };

const initialState: DataItem[] = [];

function dataStructureReducer(state: DataItem[], action: Action): DataItem[] {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}

export function DataStructureBuilder() {
  const [dataStructure, dispatch] = useReducer(
    dataStructureReducer,
    initialState,
  );

  const [newInputName, setNewInputName] = useState("");
  const [newInputType, setNewInputType] = useState("text");
  const [newInputIsUnique, setNewInputIsUnique] = useState(false);
  const [newInputDefaultValue, setNewInputDefaultValue] = useState("none");
  const [newInputIsOptional, setNewInputIsOptional] = useState(true);

  const handleAddItem = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: dataStructure.length,
        name: newInputName,
        type: newInputType,
        isUnique: newInputType,
        defaultValue: newInputDefaultValue,
        isOptional: false,
      },
    });

    setNewInputName("");
    setNewInputType("text");
    setNewInputDefaultValue("none");
  };

  return (
    <div>
      <div className="mb-4">
        {"{"}
        {dataStructure.length === 0 && (
          <p className="px-4 py-px text-sm italic text-muted-foreground">
            Flexible: ...Any data sent would be collected
          </p>
        )}
        {dataStructure.map((item, index) => (
          <div key={index} className="flex items-center gap-2 px-4 py-px">
            <p className="mb-2 text-sm text-muted-foreground">
              {item.name}: {item.type} |{" "}
              {item.isOptional ? "optional" : "required"},{" "}
              {item.isUnique ? "unique" : ""}, {item.defaultValue}
            </p>
            <Button
              className=""
              onClick={() => {
                dispatch({
                  type: "REMOVE_ITEM",
                  payload: item.id,
                });
              }}
              size="icon"
              variant="ghost"
            >
              <X size={12} />
            </Button>
          </div>
        ))}
        {"}"}
      </div>
      <Separator />
      <div className="my-4 mt-2 px-4 py-2">
        {/* <p className="font-semibold">Add new data input</p> */}
        <div className="mb-2">
          <Label htmlFor="text">New Input Name</Label>

          <Input
            placeholder="New Input Name"
            value={newInputName}
            onChange={(e) => setNewInputName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <Label htmlFor="text">Input Type</Label>

          <Select
            onValueChange={(value) => {
              setNewInputType(value);
            }}
            value={newInputType}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a input type" />
            </SelectTrigger>
            <SelectContent className="h-36">
              <SelectItem value="text">
                <span className="font-medium">Text</span>
                <span className="hidden text-muted-foreground md:inline">
                  {" "}
                  - A short string of text, like &ldquo;Hello World&rdquo;
                </span>
              </SelectItem>
              <SelectItem value="long-text">
                <span className="font-medium">Long Text</span>
                <span className="hidden text-muted-foreground md:inline">
                  {" "}
                  - A long string of text, like a blog post
                </span>
              </SelectItem>
              <SelectItem value="email">
                <span className="font-medium">Email</span>
                <span className="hidden text-muted-foreground md:inline">
                  {" "}
                  - An email address, like &ldquo;support@veldora.io&rdquo;
                </span>
              </SelectItem>
              <SelectItem value="integer">
                <span className="font-medium">Integer</span>
                <span className="hidden text-muted-foreground md:inline">
                  {" "}
                  - A whole number, like 42
                </span>
              </SelectItem>
              <SelectItem value="decimal">
                <span className="font-medium">Decimal</span>
                <span className="hidden text-muted-foreground md:inline">
                  {" "}
                  - A number with a decimal point, like 3.14
                </span>
              </SelectItem>
              <SelectItem value="url">
                <span className="font-medium">URL</span>
                <span className="hidden text-muted-foreground md:inline">
                  {" "}
                  - A URL, like &ldquo;https://veldora.io&rdquo;
                </span>
              </SelectItem>
              <SelectItem value="phone">
                <span className="font-medium">Phone</span>
                <span className="hidden text-muted-foreground md:inline">
                  {" "}
                  - A phone number, like &ldquo;555-555-5555&rdquo;
                </span>
              </SelectItem>

              <SelectItem value="boolean">
                <span className="font-medium">Boolean</span>
                <span className="hidden text-muted-foreground md:inline">
                  {" "}
                  - A true or false value
                </span>
              </SelectItem>
              <SelectItem value="date">
                <span className="font-medium">Date</span>
                <span className="hidden text-muted-foreground md:inline">
                  {" "}
                  - A date, like 2021-01-01
                </span>
              </SelectItem>
              <SelectItem value="photo">
                <span className="font-medium">Photo</span>
                <span className="hidden text-muted-foreground md:inline">
                  {" "}
                  - A photo, like &ldquo;https://veldora.io/photo.png&rdquo;
                </span>
              </SelectItem>
              <SelectItem value="file">
                <span className="font-medium">File</span>
                <span className="hidden text-muted-foreground md:inline">
                  {" "}
                  - A file, like &ldquo;https://veldora.io/file.pdf&rdquo;
                </span>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-2">
          <Label htmlFor="text">Optional</Label>

          <RadioGroup
            className="py-4"
            value={newInputIsOptional ? "yes" : "no"}
            onValueChange={(value: "yes" | "no") =>
              setNewInputIsOptional(value === "yes")
            }
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes">
                Yes
                <span className="hidden text-muted-foreground md:inline">
                  {" "}
                  - The input is optional
                </span>
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no">
                No
                <span className="hidden text-muted-foreground md:inline">
                  {" "}
                  - The input is required
                </span>
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div className="mb-2">
          <Label htmlFor="text">Unique</Label>

          <RadioGroup
            className="py-4"
            value={newInputIsUnique ? "yes" : "no"}
            onValueChange={(value: "yes" | "no") =>
              setNewInputIsUnique(value === "yes")
            }
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes">
                Yes
                <span className="hidden text-muted-foreground md:inline">
                  {" "}
                  - The input is optional
                </span>
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no">
                No
                <span className="hidden text-muted-foreground md:inline">
                  {" "}
                  - The input is required
                </span>
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="mb-2">
          <Label htmlFor="text">Input Default Value</Label>

          <Select
            value={newInputDefaultValue}
            onValueChange={(value) => {
              setNewInputDefaultValue(value);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a default value" />
            </SelectTrigger>
            <SelectContent className="h-36">
              <SelectItem value="none">
                <span className="font-medium">None</span>
                <span className="hidden text-muted-foreground md:inline">
                  {" "}
                  - No default value
                </span>
              </SelectItem>
              <SelectItem value="current-time">
                <span className="font-medium">Current Time</span>
                <span className="hidden text-muted-foreground md:inline">
                  {" "}
                  - The current time
                </span>
              </SelectItem>
              <SelectItem value="current-date">
                <span className="font-medium">Current Date</span>
                <span className="hidden text-muted-foreground md:inline">
                  {" "}
                  - The current date
                </span>
              </SelectItem>
              <SelectItem value="current-date-time">
                <span className="font-medium">Current Date & Time</span>
                <span className="hidden text-muted-foreground md:inline">
                  {" "}
                  - The current date & time
                </span>
              </SelectItem>
              <SelectItem value="custom">
                <span className="font-medium">Custom</span>
                <span className="hidden text-muted-foreground md:inline">
                  {" "}
                  - A custom value
                </span>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button
          disabled={newInputName.trim() === ""}
          onClick={handleAddItem}
          variant="outline"
        >
          Add Input
        </Button>
      </div>
      <Separator />
    </div>
  );
}
